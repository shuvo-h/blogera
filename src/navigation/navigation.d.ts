import { TBlog } from "./type";

export type RootStackParamList = {
    Home: undefined;  // Home screen doesn't expect any parameters
    BlogDetail: { blog: TBlog; };
    About: undefined; // About screen doesn't expect any parameters
  };
  