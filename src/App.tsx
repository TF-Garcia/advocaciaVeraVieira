import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NotificationToaster = lazy(() => import("./components/NotificationToaster"));

function AppLoader() {
  return (
    <div className="min-h-screen bg-background" aria-label="Carregando" />
  );
}

function IdleNotificationHost() {
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    const requestIdle = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(callback, 1800));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const idleId = requestIdle(() => setShowToaster(true));

    return () => cancelIdle(idleId);
  }, []);

  if (!showToaster) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <NotificationToaster />
    </Suspense>
  );
}

const App = () => (
  <>
    <IdleNotificationHost />
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/posts/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
