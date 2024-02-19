import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/user/UserSlice';
import axios from 'axios';
import './Todo.css'

const UserContainer = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.user);

  const [user1, setuser] = useState(null)
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)
  const [flag, setFlag] = useState(true)
  const [addFlag, setAddFlag] = useState(false)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Create a state object to track editing state for each user
  const [editingStates, setEditingStates] = useState({});

  const handleUpdateClick = (userId, name, email) => {
    setuser(name)
    setEmail(email)
    setFlag(false)
    setEditingStates((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId] || false,
    }));
  };

  const handleSaveClick = async (userId) => {
    const sndbkdata = {
      id: userId,
      name: user1,
      email: email
    }
    const x = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/user/change_user',
      data: sndbkdata
    });
    console.log(x.data)
    setEditingStates((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId] || false,
    }));
    setFlag(true)
    dispatch(getUsers())
  };

  const handleDeleteClick = async (id) => {
    const snd = {
      id: id
    }
    const x = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/user/delete_user',
      data: snd
    });
    console.log(x.data)
    dispatch(getUsers())
  }
  const handleCancleClick = (userId) => {
    setFlag(true)
    setEditingStates((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId] || false,
    }));
  }
  const addButton = () => {
    if (addFlag) {
      setAddFlag(false)
      setFlag(true)
    }
    else {
      setAddFlag(true)
      setuser("")
      setEmail('')
      setPass("")
      setFlag(false)
    }
  }
  const handleAddUser = async () => {
    const snd = {
      name: user1,
      email: email,
      password: pass
    }
    const y = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/user/add_user',
      data: snd
    });
    console.log(y.data)
    dispatch(getUsers())
    setFlag(true)
    setAddFlag(false)
  }

  return (
    <>
      <div className='flex'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {users && (
          <>
            {users.map((user) => (
              <div key={user._id}>

                {editingStates[user._id] ? (
                  <>
                    <input type='text' placeholder='Name' className="form-control" id="usr" value={user1} onChange={(e) => setuser(e.target.value)} /><br />
                    <input type='email' placeholder='Email' className="form-control" id="usr" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleSaveClick(user._id)}
                    >
                      Save
                    </button>
                    <span className='left'><button type="button" className="btn btn-outline-warning" onClick={() => handleCancleClick(user._id)}>Cancel</button></span><hr></hr>
                  </>
                ) : (
                  <>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    {flag ? (<button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => handleUpdateClick(user._id, user.name, user.email)}
                    >
                      Update
                    </button>) : (<></>)}

                    <span className='left'><button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteClick(user._id)}>Delete</button></span><hr></hr>
                  </>
                )}
                <br />
              </div>
            ))}



          </>
        )}

      </div>
      {addFlag ? (
        <div className='form flex'>
          <input type='text' placeholder='Name' className="form-control" id="usr" value={user1} onChange={(e) => setuser(e.target.value)} /><br />
          <input type='email' placeholder='Email' className="form-control" id="usr" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input type='password' placeholder='Password' className="form-control" id="usr" value={pass} onChange={(e) => setPass(e.target.value)} /><br />
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => handleAddUser()}
          >
            Save
          </button>
        </div>) : (<></>)}
      {flag ? (
        <button type="button" className="btn btn-outline-dark round" onClick={() => addButton()}>+</button>) : (<></>)}
    </>
  );
};

export default UserContainer;
