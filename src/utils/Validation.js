export const checkEmailForValidity = (email, errFunc) => {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!regex.test(String(email.value).toLowerCase())) {
      errFunc('Некорректный email');
    } else {
      errFunc('');
    }
};

export const checkPasswordForValidity = (password, errFunc) => {
  if (password.value.length < 2 || password.value.length > 16) {
    errFunc('Пароль должен быть больше 2 и меньше 16 символов');
    if (!password.value) {
      errFunc('Пароль не может быть пустым');
    }
  } else {
    errFunc('');
  }
};

export const checkNameForValidity = (userName, errFunc) => {
  if (userName.value.length < 2 || userName.value.length > 16) {
    errFunc('имя должно быть больше 2 и меньше 16 символов');
    if (!userName.value) {
      errFunc('Имя не может быть пустым');
    }
  } else {
    errFunc('');
  }
};

