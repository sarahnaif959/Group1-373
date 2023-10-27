<?php 
$req = $_POST; 
$username = $req['username'];
mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)
session_start();
if($req['password'] == 'forgot'){ 
if($req['newpassword'] == $req['confirmpassword']) {
		$hash = sodium_crypto_pwhash_str(
			$password,
			SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,
			SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE
		); 
        $update = "UPDATE `users` SET 'password' = '$hash' WHERE username = '$username' ";
        $result = mysqli_query($conn, $update);
        $_SESSION['msg'] = 'Your new password has reset successfully, you can now login.';
        header("Location: forgetpass.php");
    } else {
        $_SESSION['msg'] = 'Password does not match';
        header("Location: forgetpass.php");
    }
}
?>