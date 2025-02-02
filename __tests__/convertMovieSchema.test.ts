import { describe, it, expect } from 'vitest';
import {
  generateSchema,
  convertMovieSchema,
  generateYear,
} from '@/app/utils/convertMovieSchema';
import type { Movie_API } from '@/app/types/movie';

describe('Movie Schema Utils Functions', () => {
  // Mock data
  const mockMovie: Movie_API = {
    id: 1,
    title: 'Inception',
    overview: 'A thief who enters dreams',
    release_date: '2010-07-16',
    poster_path: '/inception-poster.jpg',
    adult: false,
    backdrop_path: '/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
    genre_ids: [2],
    original_language: 'en',
    original_title: 'Sonic the Hedgehog 3',
    popularity: 4393.441,
    video: false,
    vote_average: 7.882,
    vote_count: 1310,
  };

  describe('generateSchema', () => {
    it('should correctly transform movie data', () => {
      const result = generateSchema(mockMovie);

      expect(result).toEqual({
        id: 1,
        title: 'Inception',
        overview: 'A thief who enters dreams',
        release_date: '2010',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/inception-poster.jpg',
      });
    });

    it('should throw error for invalid date', () => {
      const invalidMovie = {
        ...mockMovie,
        release_date: 'invalid-date',
      };

      expect(() => generateSchema(invalidMovie)).toThrow(
        'Invalid date string'
      );
    });
  });

  describe('convertMovieSchema', () => {
    it('should limit result array to 6 elements', () => {
      const mockMovies = Array(8)
        .fill(null)
        .map((_, index) => ({
          ...mockMovie,
          id: index + 1,
        }));

      const result = convertMovieSchema(mockMovies);

      expect(result).toHaveLength(6);
      expect(result[0]).toEqual({
        id: 1,
        title: 'Inception',
        overview: 'A thief who enters dreams',
        release_date: '2010',
        imageUrl:
          'https://image.tmdb.org/t/p/w500/inception-poster.jpg',
      });
    });

    it('should handle empty array', () => {
      const result = convertMovieSchema([]);
      expect(result).toEqual([]);
    });

    it('should handle array with less than 6 items', () => {
      const mockMovies = Array(3)
        .fill(null)
        .map((_, index) => ({
          ...mockMovie,
          id: index + 1,
        }));

      const result = convertMovieSchema(mockMovies);
      expect(result).toHaveLength(3);
    });
  });

  describe('generateYear', () => {
    it('should extract year from valid date string', () => {
      const result = generateYear('2010-07-16');
      expect(result).toBe('2010');
    });

    it('should throw error for invalid date', () => {
      expect(() => generateYear('invalid-date')).toThrow(
        'Invalid date string'
      );
    });
  });
});
