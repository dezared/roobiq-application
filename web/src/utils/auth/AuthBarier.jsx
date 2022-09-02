function AuthBarier() {
    const user = JSON.parse(localStorage.getItem('userAuthorizationToken'));
    if (user && user.token) {
      return { 
        'AccessToken': 'Bearer ' + user.token,
        'Id': user.id
       };
    } else {
      return {};
    }
}

export default AuthBarier;