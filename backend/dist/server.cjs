// Production boot wrapper
// Delegates directly to native ES module backend/index.js to eliminate esbuild bundling anomalies
(async () => {
  try {
    await import('../index.js');
  } catch (err) {
    console.error('Fatal startup error in server boot wrapper:', err);
    process.exit(1);
  }
})();
