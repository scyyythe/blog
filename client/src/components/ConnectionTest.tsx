import { useState, useEffect } from 'react';

export function ConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState<{
    status?: string;
    message?: string;
    timestamp?: string;
    error?: string;
  }>({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('/api/test-connection');
        const data = await response.json();
        setConnectionStatus(data);
      } catch (error) {
        setConnectionStatus({
          status: 'error',
          error: 'Failed to connect to server'
        });
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 m-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Server Connection Status</h2>
      {loading ? (
        <p>Testing connection...</p>
      ) : (
        <div>
          <p className={`font-semibold ${connectionStatus.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            Status: {connectionStatus.status}
          </p>
          {connectionStatus.message && (
            <p className="mt-2">{connectionStatus.message}</p>
          )}
          {connectionStatus.timestamp && (
            <p className="text-sm text-gray-600 mt-2">
              Last checked: {new Date(connectionStatus.timestamp).toLocaleString()}
            </p>
          )}
          {connectionStatus.error && (
            <p className="text-red-500 mt-2">{connectionStatus.error}</p>
          )}
        </div>
      )}
    </div>
  );
}