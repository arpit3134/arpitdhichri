import { Routes, Route } from 'react-router-dom'
import { StickyHeader } from './components/StickyHeader'
import { RichFooter } from './components/RichFooter'
import Index from './pages/Index'
import Discover from './pages/Discover'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Tools from './pages/Tools'
import ToolDetail from './pages/ToolDetail'
import Calculators from './pages/Calculators'
import CalculatorDetail from './pages/CalculatorDetail'
import Topics from './pages/Topics'
import TopicDetail from './pages/TopicDetail'
import Collections from './pages/Collections'
import CollectionDetail from './pages/CollectionDetail'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Trending from './pages/Trending'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/calculators/:id" element={<CalculatorDetail />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:slug" element={<TopicDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <RichFooter />
    </div>
  )
}

export default App