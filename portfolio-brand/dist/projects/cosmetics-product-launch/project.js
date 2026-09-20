// Open the case selected from the homepage without changing shared navigation.
(() => {
  const value = new URLSearchParams(location.search).get('case');
  if (!/^[0-2]$/.test(value ?? '')) return;
  document.getElementById(`tab-${value}`)?.click();
})();
