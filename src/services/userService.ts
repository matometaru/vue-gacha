// model
import User from '@/models/User';

// repository
import UserRepository from '@/repositories/userRepository';

export const login = async(name: string): Promise<User> => {
  return await new UserRepository().login(name);
}