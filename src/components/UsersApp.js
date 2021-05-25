import { Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import UserInfo from "./UserInfo";

const UserApp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/:id"  component={UserInfo} />
      </Switch>
    </div>
  );
}

export default UserApp;