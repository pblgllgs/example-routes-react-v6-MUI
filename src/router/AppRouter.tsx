import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import PostRoutes from '../Post/routes/PostRoutes';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<PostRoutes />} />
        </Routes>
    );
};

export default AppRouter;
