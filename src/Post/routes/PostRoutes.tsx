import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { PostPage } from '../pages/PostPage';

const PostRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default PostRoutes