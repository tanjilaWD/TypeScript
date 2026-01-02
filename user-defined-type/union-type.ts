let userId: (string | number | boolean);

userId = 'Tanjila123';
userId = 12345;
userId = true;

//
function displayUserInfo(userId: number | string){
 console.log(userId);
}

displayUserInfo(121);
displayUserInfo('Bithi');