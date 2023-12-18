import { Authenticated, Refine } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'

import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineThemes,
  ThemedLayoutV2,
  ThemedTitleV2,
} from '@refinedev/chakra-ui'
// Icons
import {
  MdDashboard,
  MdCategory,
  MdPoll,
  MdQuestionAnswer,
} from 'react-icons/md'

import Dashboard from './pages/Dashboard'
import Question from './pages/Question'
import TestsPage from './pages/TestsPage'

import { ChakraProvider } from '@chakra-ui/react'
import routerBindings, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6'

import { DataProvider } from '@refinedev/strapi-v4'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { authProvider, axiosInstance } from './authProvider'
import { AppIcon } from './components/app-icon'
import { Header } from './components/header'
import { API_URL } from './constants'
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from './pages/blog-posts'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  const { t, i18n } = useTranslation()
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <GitHubBanner /> */}
        <RefineKbarProvider>
          {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
          <ChakraProvider theme={RefineThemes.Yellow}>
            <Refine
              authProvider={authProvider}
              dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
              notificationProvider={notificationProvider}
              i18nProvider={i18nProvider}
              routerProvider={routerBindings}
              resources={[
                {
                  name: 'dashboard',
                  list: '/',
                  meta: {
                    // canDelete: true,
                    label: 'Panel de control',
                  },
                  icon: <MdDashboard />,
                },
                {
                  name: 'testpage',
                  list: '/testpage',
                  meta: {
                    // canDelete: true,
                    label: 'Muestras de Resultados',
                  },
                  icon: <MdDashboard />,
                },
                {
                  name: 'question',
                  list: '/question',
                  meta: {
                    // canDelete: true,
                    label: 'Pruebas de aplicación',
                  },
                  icon: <MdQuestionAnswer />,
                },
                /* {
                  // Nombre del recurso que identificaremos en locales
                  name: 'blog-posts',
                  identifier: 'blog-post',
                  // Rutas del recurso
                  list: '/blog-posts',
                  create: '/blog-posts/create',
                  edit: '/blog-posts/edit/:id',
                  show: '/blog-posts/show/:id',
                  meta: {
                    canDelete: true,
                    label: 'Publicaciones',
                    title: 'Publicaciones',
                  },
                  icon: <MdDashboard />,
                }, */
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Title={({ collapsed }) => (
                          <ThemedTitleV2
                            collapsed={collapsed}
                            text="encuesta-app"
                            icon={<AppIcon />}
                          />
                        )}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  {/* Index route */}
                  <Route
                    index
                    // element={<NavigateToResource resource="dashboard" />}
                    element={<Dashboard />}
                  />
                  {/* Custom pages */}
                  <Route path="/question">
                    <Route index element={<Question />} />
                  </Route>
                  <Route path="/testpage">
                    <Route index element={<TestsPage />} />
                  </Route>

                  <Route path="/blog-posts">
                    <Route index element={<BlogPostList />} />
                    <Route path="create" element={<BlogPostCreate />} />
                    <Route path="edit/:id" element={<BlogPostEdit />} />
                    <Route path="show/:id" element={<BlogPostShow />} />
                  </Route>

                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated fallback={<Outlet />}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route
                    path="/login"
                    element={
                      <AuthPage
                        type="login"
                        title={
                          <ThemedTitleV2
                            collapsed={false}
                            text="sourvey-app"
                            icon={<AppIcon />}
                          />
                        }
                        formProps={{
                          defaultValues: {
                            email: 'demo@demo.cl',
                            password: 'demodemo',
                          },
                        }}
                      />
                    }
                  />
                  <Route
                    path="/register"
                    element={<AuthPage type="register" />}
                  />
                  <Route
                    path="/forgot-password"
                    element={<AuthPage type="forgotPassword" />}
                  />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
            </Refine>
          </ChakraProvider>
        </RefineKbarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
