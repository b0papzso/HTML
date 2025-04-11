using System;
using System.Collections.Generic;

namespace CasinoProjektConsole.Models;

public partial class Player
{
    public string? Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public int Amount { get; set; }

    public Player(string name, string email)
    {
        if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(email))
            throw new ArgumentException("A név és az email nem lehet üres!");
        if (!email.Contains('@') || !email.Contains('.'))
            throw new ArgumentException("Az email cím nem megfelelő formátumú!");
        Name = name;
        Email = email;
    }

    public void IncreaseMoney(int amount)
    {
        if (amount <= 0) throw new ArgumentException("Nem lehet 0-t vagy kisebb számot hozzáadni!");
        Amount += amount;
    }

    public string GetCouldPlay()
    {
        if (Amount <= 0)
            return $"{Name} - Nincs elég pénz a játékhoz!";
        else
            return $"{Name} - Elég pénz van a játékhoz!";
    }

    public string GetMoney()
    {
        return $"{Name} - {Amount} Ft";
    }

    public string MakeBet(int bet)
    {
        if(bet > Amount) throw new ArgumentException("Nem lehet a tát nagyobb mint a rendelkezésre álló összeg!")
        Amount -= bet;
        return $"{bet} méretű tét megtéve!";
    }
}
