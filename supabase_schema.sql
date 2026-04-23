-- TALEX CMS Database Schema

-- 1. Courses Table
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    icon TEXT, -- Lucide icon name or URL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Uploads Table
CREATE TABLE uploads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    file_type TEXT NOT NULL CHECK (file_type IN ('video', 'notes', 'pdf')),
    course_category TEXT NOT NULL,
    tags TEXT[],
    visibility TEXT NOT NULL DEFAULT 'public' CHECK (visibility IN ('public', 'private')),
    views INTEGER DEFAULT 0,
    downloads INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Row Level Security (RLS) Policies

-- Courses: Read access for everyone
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Courses are viewable by everyone" ON courses FOR SELECT USING (true);

-- Uploads: 
ALTER TABLE uploads ENABLE ROW LEVEL SECURITY;

-- Everyone can view public uploads
CREATE POLICY "Public uploads are viewable by everyone" 
ON uploads FOR SELECT 
USING (visibility = 'public');

-- Users can view their own private uploads
CREATE POLICY "Users can view their own private uploads" 
ON uploads FOR SELECT 
USING (auth.uid() = user_id);

-- Users can insert their own uploads
CREATE POLICY "Users can insert their own uploads" 
ON uploads FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Users can update their own uploads
CREATE POLICY "Users can update their own uploads" 
ON uploads FOR UPDATE 
USING (auth.uid() = user_id);

-- Users can delete their own uploads
CREATE POLICY "Users can delete their own uploads" 
ON uploads FOR DELETE 
USING (auth.uid() = user_id);

-- 4. Initial Seed Data
INSERT INTO courses (name, slug, icon) VALUES
('Programming', 'programming', 'code'),
('Design', 'design', 'layout'),
('AI & Machine Learning', 'ai-ml', 'brain'),
('Cybersecurity', 'cybersecurity', 'lock'),
('Data Science', 'data-science', 'bar-chart'),
('Marketing', 'marketing', 'trending-up'),
('Business', 'business', 'briefcase'),
('Public Speaking', 'public-speaking', 'mic');
