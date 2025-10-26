import { apiService, ApiResponse } from './api.service';

// Types
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
}

class PostsApi {
  private readonly BASE_PATH = '/posts';

  async getAllPosts(page = 1, limit = 10): Promise<ApiResponse<Post[]>> {
    return apiService.get<Post[]>(`${this.BASE_PATH}?page=${page}&limit=${limit}`);
  }

  async getPostById(id: string): Promise<ApiResponse<Post>> {
    return apiService.get<Post>(`${this.BASE_PATH}/${id}`);
  }

  async createPost(post: CreatePostDto): Promise<ApiResponse<Post>> {
    return apiService.post<Post>(this.BASE_PATH, post);
  }

  async updatePost(id: string, post: UpdatePostDto): Promise<ApiResponse<Post>> {
    return apiService.put<Post>(`${this.BASE_PATH}/${id}`, post);
  }

  async deletePost(id: string): Promise<ApiResponse<void>> {
    return apiService.delete(`${this.BASE_PATH}/${id}`);
  }

  async getFeaturedPosts(): Promise<ApiResponse<Post[]>> {
    return apiService.get<Post[]>(`${this.BASE_PATH}/featured`);
  }

  async getUserPosts(userId: string): Promise<ApiResponse<Post[]>> {
    return apiService.get<Post[]>(`${this.BASE_PATH}/user/${userId}`);
  }
}

export const postsApi = new PostsApi();