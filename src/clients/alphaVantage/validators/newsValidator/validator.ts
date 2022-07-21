import { UserInputError } from 'apollo-server-core';
import { INewsArgs } from '../../../../resolvers/news';

export class NewsValidator {
  private static _sortTypeSet = new Set(['LATEST', 'EARLIEST', 'RELEVANCE']);
  private static _topicSet = new Set([
    'blockchain',
    'earnings',
    'ipo',
    'mergers_and_acquisitions',
    'financial_markets',
    'economy_fiscal',
    'economy_monetary',
    'economy_macro',
    'energy_transportation',
    'finance',
    'life_sciences',
    'manufacturing',
    'real_estate',
    'retail_wholesale',
    'technology',
  ]);

  private static _isValidSortType(x: string): boolean {
    return this._sortTypeSet.has(x);
  }

  private static _findInvalidTopics(x: string[]): string[] {
    const invalidTopics: string[] = [];
    x.forEach((topic) => {
      if (!this._topicSet.has(topic)) {
        invalidTopics.push(topic);
      }
    });
    return invalidTopics;
  }

  public static Validate(args: INewsArgs) {
    if (args.sort && !this._isValidSortType(args.sort)) {
      throw new UserInputError('Invalid Sort Type Given');
    }

    if (args.topics && args.topics.length > 0) {
      const invalidTopics = this._findInvalidTopics(args.topics);
      if (invalidTopics.length > 0) {
        throw new UserInputError(
          `The following given topics are invalid: [${invalidTopics}]`
        );
      }
    }
  }
}
