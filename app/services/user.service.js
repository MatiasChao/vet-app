import * as firebase from 'firebase';
import {getUid} from '../utils/utils';

export default class UserService {
  static instance = new UserService();

  getUserProfile = (userId = null) => {
    return new Promise((resolve, reject) => {
      const uid = userId || getUid();
      firebase
        .database()
        .ref(`users/${uid}`)
        .once('value', function (snapshot) {
          let userProfile = snapshot.val();
          userProfile.uid = snapshot.key;
          resolve(userProfile);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  createUserProfile = async (uid, userProfile) => {
    return await firebase.database().ref(`users/${uid}`).set(userProfile);
  };

  createUserWithEmailAndPassword = async (email, password, userProfile) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const userId = getUid();
    return await this.createUserProfile(userId, userProfile);
  };

  sendEmailVerification = async () => {
    return await firebase.auth().currentUser.sendEmailVerification();
  };

  userExists = (email) => {
    return new Promise((resolve, _) => {
      firebase
        .database()
        .ref('users')
        .once('value', function (snapshot) {
          snapshot.forEach((child) => {
            const {email: userEmail} = child.val();
            if (userEmail.toLowerCase() === email) {
              resolve(true);
            }
          });
          resolve(false);
        });
    });
  };
}
