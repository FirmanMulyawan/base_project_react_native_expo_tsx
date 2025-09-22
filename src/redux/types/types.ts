export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  loading: boolean;
  posts: Posts[];
  error: string | null;
  selectedPost: Posts | null;
  searchQuery: string;
}
