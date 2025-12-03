import React, { useMemo } from 'react';
import { MemoryPost } from '../types';
import { Check, X, Trash2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AdminPanelProps {
  memories: MemoryPost[];
  onUpdateStatus: (id: string, status: 'approved' | 'rejected') => void;
  onDelete: (id: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ memories, onUpdateStatus, onDelete }) => {
  const pendingMemories = memories.filter(m => m.status === 'pending');
  const approvedMemories = memories.filter(m => m.status === 'approved');

  // Prepare Chart Data
  const chartData = useMemo(() => {
    const data = [
      { name: 'Chờ duyệt', count: pendingMemories.length },
      { name: 'Đã duyệt', count: approvedMemories.length },
      { name: 'Từ chối', count: memories.filter(m => m.status === 'rejected').length },
    ];
    return data;
  }, [memories, pendingMemories.length, approvedMemories.length]);

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-school-red pl-3">Trang Quản Trị Nội Dung</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Stats */}
          <div className="bg-white p-6 rounded shadow">
             <h3 className="text-lg font-bold mb-4 text-gray-700">Thống kê bài đăng</h3>
             <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8B0000" name="Số lượng" />
                  </BarChart>
               </ResponsiveContainer>
             </div>
          </div>

           {/* Quick Actions */}
           <div className="bg-white p-6 rounded shadow flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4 text-gray-700">Trạng thái hệ thống</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{memories.length}</div>
                    <div className="text-sm text-gray-500">Tổng bài viết</div>
                  </div>
                   <div className="p-4 bg-yellow-50 rounded">
                    <div className="text-2xl font-bold text-yellow-600">{pendingMemories.length}</div>
                    <div className="text-sm text-gray-500">Cần duyệt</div>
                  </div>
              </div>
           </div>
        </div>

        {/* Pending Table */}
        <div className="bg-white rounded shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-bold text-gray-700">Danh sách chờ duyệt ({pendingMemories.length})</h3>
          </div>
          
          {pendingMemories.length === 0 ? (
            <div className="p-8 text-center text-gray-500">Không có bài viết nào đang chờ duyệt.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm">
                    <th className="p-4 font-semibold">Người gửi</th>
                    <th className="p-4 font-semibold">Nội dung</th>
                    <th className="p-4 font-semibold">Ngày gửi</th>
                    <th className="p-4 font-semibold text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pendingMemories.map((mem) => (
                    <tr key={mem.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium text-gray-800">{mem.authorName}</div>
                        <div className="text-xs text-gray-500">{mem.role}</div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-gray-600 line-clamp-2 max-w-md" title={mem.content}>
                          {mem.content}
                        </p>
                      </td>
                      <td className="p-4 text-sm text-gray-500">{mem.dateSubmitted}</td>
                      <td className="p-4">
                        <div className="flex justify-center space-x-2">
                          <button 
                            onClick={() => onUpdateStatus(mem.id, 'approved')}
                            className="p-1.5 bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
                            title="Duyệt"
                          >
                            <Check size={18} />
                          </button>
                          <button 
                             onClick={() => onUpdateStatus(mem.id, 'rejected')}
                            className="p-1.5 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
                            title="Từ chối"
                          >
                            <X size={18} />
                          </button>
                          <button 
                             onClick={() => onDelete(mem.id)}
                            className="p-1.5 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition"
                            title="Xóa"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;