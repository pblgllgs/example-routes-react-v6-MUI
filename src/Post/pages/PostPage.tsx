import { PostLayout } from '../layout/PostLayout';
import { gql, useQuery } from '@apollo/client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Grid } from '@mui/material';

export const PostPage = () => {
  const GET_POSTS = gql`
    query {
      posts {
        id
        title
        text
        isPublished
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_POSTS);
  console.log(data);
  const { posts } = data || { posts: [] };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'text', headerName: 'Content', width: 130 },
    {
      field: 'isPublished',
      headerName: 'Published',
      width: 130,
    },
  ];

  const rows = posts;

  return (
    <PostLayout title="Post">
      <Grid
        style={{
          height: 400,
          width: 900,
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Grid>
    </PostLayout>
  );
};
