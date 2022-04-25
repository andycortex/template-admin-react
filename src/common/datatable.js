export const userColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { 
        field: 'user', 
        headerName: 'User', 
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img 
                      className="cellImg" 
                      src={
                        
                        params.row.img ? params.row.img
                        : 'https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A='
                        
                      } alt="avatar" />
                    { params.row.username }
                </div>
            );
        },
    },
    { field: 'email', headerName: 'Email', width: 230},
    { field: 'address', headerName: 'Address', width: 100 },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },

];