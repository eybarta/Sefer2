import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class SefariaService {
  private readonly baseURL = 'https://www.sefaria.org/api/texts/';

  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache
  ) {}

  async getText(reference: string) {
    try {
      // Check cache first
      const cached = await this.cacheManager.get(`text_${reference}`);
      if (cached) {
        return cached;
      }

      const response = await axios.get(`${this.baseURL}${reference}`);
      const data = response.data;

      // Cache the response
      await this.cacheManager.set(`text_${reference}`, data);

      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch text from Sefaria',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}