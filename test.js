const sendRequest = async (url, method) => {
  setLoading(true);
  setResponse(null);
  setError(null);

  try {
    // Prepare headers
    const requestHeaders = headers.reduce((acc, header) => {
      if (header.key && header.value) {
        acc[header.key] = header.value;
      }
      return acc;
    }, {});

    // Prepare request options
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...requestHeaders,
      },
    };

    // Add body for methods that support it
    if (["POST", "PUT", "PATCH"].includes(method)) {
      try {
        requestOptions.body = body
          ? JSON.stringify(JSON.parse(body))
          : JSON.stringify({});
      } catch (jsonError) {
        setError("Invalid JSON in request body");
        setLoading(false);
        return;
      }
    }

    // Perform fetch request
    const fetchResponse = await fetch(url, requestOptions);

    // Parse response
    const responseData = await fetchResponse.text();

    // Try to parse as JSON, fallback to raw text
    let parsedData;
    try {
      parsedData = JSON.stringify(JSON.parse(responseData), null, 2);
    } catch {
      parsedData = responseData;
    }

    setResponse({
      status: fetchResponse.status,
      data: parsedData,
      headers: Object.fromEntries(fetchResponse.headers.entries()),
    });
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
