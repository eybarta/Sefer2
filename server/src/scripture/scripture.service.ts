import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scripture } from './scripture.entity';
import { SefariaService } from '../sefaria/sefaria.service';

@Injectable()
export class ScriptureService {
  constructor(
    @InjectRepository(Scripture)
    private scriptureRepository: Repository<Scripture>,
    private sefariaService: SefariaService,
  ) {}

  async getScripture(reference: string): Promise<Scripture> {
    // Try to find in database first
    let scripture = await this.scriptureRepository.findOne({
      where: { reference },
    });

    if (!scripture) {
      // Fetch from Sefaria if not in database
      const sefariaText = await this.sefariaService.getText(reference);
      
      scripture = this.scriptureRepository.create({
        reference,
        text: sefariaText,
      });

      await this.scriptureRepository.save(scripture);
    }

    return scripture;
  }
}
