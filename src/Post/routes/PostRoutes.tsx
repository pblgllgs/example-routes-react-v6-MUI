import { Navigate, Route, Routes } from 'react-router-dom'
import { PostPage } from '../pages/PostPage'

const PostRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default PostRoutes