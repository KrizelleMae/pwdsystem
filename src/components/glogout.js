import Googlelogout from "react-google-login";

const clientId =
  "463065432871-c6n0ltb05akftuj1m0metquv49cumha5.apps.googleusercontent.com";
function glogout() {
  return (
    <div id="signOutButton">
      <Googlelogout
        clientId={clientId}
        buttonText={"Logout"}
        //  onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default glogout;
