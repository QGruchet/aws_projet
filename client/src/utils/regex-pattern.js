const UsernamePattern = '[a-zA-Z0-9_\-]{3,16}';
const PasswordPattern = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

export { UsernamePattern, PasswordPattern };
