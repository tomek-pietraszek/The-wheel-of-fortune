while (isWorking(Meron))
{
    coffee.drink();
    work.execute();

    if (coffee.isEmpty())
    {
        coffeepot.brew();
        coffee.refill()
    }
}