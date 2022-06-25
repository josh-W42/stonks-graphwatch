/**
 * Abstract Base Parser class.
 *
 * The goal of a AlphaVantageClient Parser is to transform raw data
 * from the API's various endpoints into our own structures that flow
 * better with GQL.
 */
export abstract class BaseParser<M, T> {
  public abstract Parse(data: M): T;
}
