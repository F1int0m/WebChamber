import './view/style/App.module.css';
import {Routes, Route} from "react-router-dom";

import MainHeader from "./view/components/Header/MainHeader";
import NotFound from "./view/pages/system/NotFound";
import Favourites from "./view/pages/private/Favourites";
import Settings from "./view/pages/private/Settings";
import Profile from "./view/pages/private/Profile";
import Login from "./view/pages/public/Login";
import FinishAuth from "./view/pages/public/FinishAuth";

import {
    ROOT_URL,
    CHAMBER_URL,
    FAVOURITES_URL,
    SETTINGS_URL,
    PROFILE_PAGE,
    CHALLENGES_URL,
    CASUAL_URL,
    PEOPLE_URL,
    LOGIN_URL,
    FINISH_AUTH,
    NOT_FOUND_URL
} from './system/env'
import ContentFeed from "./view/components/Content/ContentFeed/ContentFeed";
import People from "./view/pages/private/chamber/People";
import Chamber from "./view/pages/private/Chamber";
import PostView from "./view/pages/private/PostView";
import CreatePost from "./view/pages/private/CreatePost";
import ChallengeView from "./view/pages/private/ChallengeView";

function App() {
    // TODO: поставить приватность через isAuth, вытащить навигацию в отдельный файл
    //       const isAuth = useSelector(state => state.is_auth)

    const isMyProfile = true;

  return (
    <div className="App">
        <Routes>
            <Route path={NOT_FOUND_URL} element={<NotFound />}/>
            <Route path={ROOT_URL} element={<MainHeader/>}>
                <Route path={FAVOURITES_URL} element={<Favourites />}/>
                <Route path={SETTINGS_URL} element={<Settings />}/>
                <Route path={PROFILE_PAGE.URL} element={<Profile />}>
                    <Route path={PROFILE_PAGE.CHALLENGES.URL} element={
                        <ContentFeed pageType={PROFILE_PAGE.CHALLENGES.TYPE}/>
                    }/>
                    {isMyProfile ?
                        <Route path={PROFILE_PAGE.CASUAL.URL} element={
                            <ContentFeed pageType={PROFILE_PAGE.CASUAL.TYPE.ME}/>
                        }/>
                        :
                        <Route path={PROFILE_PAGE.CASUAL.URL} element={
                            <ContentFeed pageType={PROFILE_PAGE.CASUAL.TYPE.NOT_ME}/>
                        }/>
                    }
                </Route>
                <Route path={CHAMBER_URL} element={<Chamber />}>
                    <Route path={CHALLENGES_URL} element={
                        <ContentFeed pageType={'challenges-chamber'}/>
                    }/>
                    <Route path={CASUAL_URL} element={
                        <ContentFeed pageType={'casual-chamber'}/>
                    }/>
                    <Route path={PEOPLE_URL} element={
                        <People />
                    }/>
                </Route>
                <Route path={'/challenge'} element={<ChallengeView />}/>
                <Route path={'/post'} element={<PostView />}/>
                <Route path={'/post/create'} element={<CreatePost />}/>
            </Route>
            <Route path={LOGIN_URL} element={<Login />}/>
            <Route path={FINISH_AUTH} element={<FinishAuth />}/>
        </Routes>
    </div>
  );
}

export default App;
