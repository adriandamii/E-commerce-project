import React, { useEffect } from 'react';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, listUsers } from '../../../actions/userActions';
import LoadingBox from '../../../components/LoadingBox';
import MessageBox from '../../../components/MessageBox';
import { USER_DETAILS_RESET } from '../../../constants/userConstants';
import './userListPage.css';
import { Badge } from 'react-bootstrap';

export default function UserListPage(props) {
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user._id));
    }
  };

  function getUserId(user) {
    navigate(`/productlist/seller/${user._id}`);
  }

  return (
    <div className="main-listusers">
      <h1>Users</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th className="userlist-id">ID</th>
                <th className="name-id">NAME</th>
                <th>EMAIL</th>
                <th className="userlist-isSeller">IS SELLER</th>
                <th className="userlist-isAdmin">IS ADMIN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="userlist-id">{user._id}</td>
                  <td className="name-id">{user.name}</td>
                  <td
                    className="directory-to-seller-products"
                    onClick={() => getUserId(user)}
                  >
                    {user.email}
                  </td>
                  <td className="userlist-isSeller">
                    {user.isSeller ? 'YES' : ' NO'}
                  </td>
                  <td className="userlist-isAdmin">
                    {user.isAdmin ? 'YES' : 'NO'}
                  </td>
                  <td>
                    {user.email === 'demo@example.com' ? null : (
                      <>
                      {user.wantProductUpdate &&
                        <Badge bg="danger">1</Badge>
                      }
                        <BiPencil
                          className="icon-size"
                          onClick={() => navigate(`/user/${user._id}/edit`)}
                        />
                        <BiTrash
                          className="icon-size"
                          onClick={() => deleteHandler(user)}
                        />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
