export abstract class BaseParser<M, T> {
  public abstract Parse(data: M): T;
}
