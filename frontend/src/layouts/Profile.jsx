import { useSelector } from 'react-redux'
import { Bars } from 'react-loader-spinner'

const Profile = () => {
    const { userdata, loading } = useSelector((state) => state.Userdatastate)

    return (
        <>
            {
                loading ?
                    <div className='d-flex loader justify-content-center align-items-center'>

                        <Bars
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true} />
                    </div>
                    :
                    <>
                        {userdata != null &&
                            <div className='px-5 py-2 container'>
                                <div className='bg-light border border-dark p-5 rounded-3'>
                                    <h2 className='display-1'>{userdata.user.username}</h2>
                                    <p>Joined at : {userdata.user.date_joined}</p>
                                </div>
                                <div className='mt-3'>
                                    <h2 className='display-6'>Other Details:</h2>
                                    <div>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-unstyled list-group-item lead'>Email : {userdata.user.email}</li>
                                            <li className='list-unstyled list-group-item lead'>First Name : {userdata.user.first_name}</li>
                                            <li className='list-unstyled list-group-item lead'>Last Name : {userdata.user.last_name}</li>
                                        </ul>
                                    </div>
                                    <div className='mt-4'>
                                        <button className='btn btn-danger'>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>}
                    </>

            }
        </>
    )
}

export default Profile