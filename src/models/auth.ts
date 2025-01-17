import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from '../contexts/authContext';
import { instanceAxiosLogin } from "../services/axios";

interface TLoginResponseSucess {
	error: boolean;
	user: {
		id: number,
		name: string,
		token: string,
	};
};

interface TLoginResponseFail {
	error: true;
	message: string;
};

interface TLoginData {
  user: string;
  password: string;
};