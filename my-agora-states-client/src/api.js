import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:4000',
  headers: { 'Content-Type': 'application/json' },
});

export const apis = {
  getDiscussions() {
    return instance.get('/discussions');
  },
  createDiscussion(data) {
    return instance.post(`/discussions`, data);
  },
  updateDiscussion(id, data) {
    return instance.put(`/discussions/${id}`, data);
  },
  deleteDiscussion(id) {
    return instance.delete(`/discussions/${id}`);
  },
};
