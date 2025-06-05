import { Main } from '../pages/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/layouts/app-layout/AppLayout';
import './App.css';
import { ROUTES } from '../routes/routes';
import { CharacterCard } from '../pages/character/components/character-card/CharacterCard';
import { EpisodeCard } from '../pages/episode/components/episode-card/EpisodeCard';
import { LocationCard } from '../pages/location/components/location-card/LocationCard';
import { AuthProvider } from './context/auth-provider/AuthProvider';
import { PrivateRoute } from '../components/private-route/PrivateRoute';
import { LazyCharacter } from '../pages/character';
import { LazyEpisode } from '../pages/episode';
import { LazyLocation } from '../pages/location';
import { LazyNotFound } from '../pages/not-found';
import { LazyLogin } from '../pages/login';

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.Index} element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route
              path={ROUTES.Characters}
              element={
                <PrivateRoute>
                  <LazyCharacter/>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.Character}
              element={
                <PrivateRoute>
                  <CharacterCard />
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.Episodes}
              element={
                <PrivateRoute>
                  <LazyEpisode/>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.Episode}
              element={
                <PrivateRoute>
                  <EpisodeCard />
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.Locations}
              element={
                <PrivateRoute>
                  <LazyLocation/>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.Location}
              element={
                <PrivateRoute>
                  <LocationCard />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path={ROUTES.NotFound} element={<LazyNotFound />} />
          <Route path={ROUTES.Login} element={<LazyLogin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
