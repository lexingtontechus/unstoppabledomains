import UAuth from "@uauth/js";

const uauth = new UAuth({
    clientID: "814a3502-e259-4972-9e2f-e0d5fe9482d8",
    redirectUri: "https://localhost:3000",
    scope: "openid wallet email profile:optional social:optional",
  });
  
  export default function UAuthButton() {
    const login = async () => {
      try {
        const authorization = await uauth.loginWithPopup();
        console.log(authorization);
        window.alert(authorization.accessToken);
      } catch (error) {
        console.log("Error", error);
      }
    };
    const logout = async () => {
      try {
        const authorization = await uauth.Disconnect();
        console.log(authorization);
        window.alert(authorization.accessToken);
      } catch (error) {
        console.log("Error", error);
      }
    };
    return (
      <div className="join">
          
            <button onClick={login} className="btn btn-primary join-item">Connect</button>
  
            <button onClick={logout} className="btn btn-primary join-item">Disconnect</button>
          
</div>
    );
  }