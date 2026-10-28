export default function ApiState({ loading, error, empty, onRetry }) {
  if (loading) return <p className="state-message">Đang tải...</p>
  if (error) return <div className="state-message error">{error} {onRetry && <button onClick={onRetry}>Thử lại</button>}</div>
  if (empty) return <p className="state-message">Chưa có dữ liệu để hiển thị.</p>
  return null
}
