CREATE TABLE scriptures (
    id SERIAL PRIMARY KEY,
    reference TEXT NOT NULL,
    text JSONB NOT NULL,
    embeddings BYTEA,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_scriptures_reference ON scriptures(reference);

CREATE TABLE commentaries (
    id SERIAL PRIMARY KEY,
    scripture_id INTEGER REFERENCES scriptures(id),
    source TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_commentaries_scripture ON commentaries(scripture_id);