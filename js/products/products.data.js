import { CPU, GPU, Motherboard, RAM } from "../models/product.model.js";

export const productsData = [
    new CPU({
        id: 1,
        name: "Ryzen 5 5600X",
        vendor: "AMD",
        price: 11999,
        socket: "AM4",
        cores: 6,
        threads: 12,
        baseClock: 3.7
    }),
    new GPU({
        id: 2,
        name: "RTX 4070",
        vendor: "Nvidia",
        price: 69999,
        VRAMType: "GDDR6",
        VRAMSize: 12
    }),
    new Motherboard({
        id: 3,
        name: "PRO B650-S WIFI",
        vendor: "MSI",
        price: 13000,
        formFactor: "ATX",
        chipset: "B650"
    }),
    new RAM({
        id: 4,
        name: "XPG Lancer",
        vendor: "Adata",
        price: 50000,
        size: 32,
        type: "DDR5"
    }),
    new CPU({
        id: 5,
        name: "Core i7-14700K",
        vendor: "Intel",
        price: 45000,
        socket: "LGA 1700",
        cores: 20,
        threads: 28,
        baseClock: 3.4
    }),
    new GPU({
        id: 6,
        name: "Radeon RX 7900 XT",
        vendor: "AMD",
        price: 85000,
        VRAMType: "GDDR6",
        VRAMSize: 20
    }),
    new Motherboard({
        id: 7,
        name: "ROG STRIX Z790-E GAMING WIFI",
        vendor: "ASUS",
        price: 35000,
        formFactor: "ATX",
        chipset: "Z790"
    }),
    new RAM({
        id: 8,
        name: "Dominator Platinum RGB",
        vendor: "Corsair",
        price: 35000,
        size: 64,
        type: "DDR5"
    }),
    new CPU({
        id: 9,
        name: "Ryzen 9 7950X3D",
        vendor: "AMD",
        price: 70000,
        socket: "AM5",
        cores: 16,
        threads: 32,
        baseClock: 4.2
    }),
    new GPU({
        id: 10,
        name: "RTX 4090",
        vendor: "Nvidia",
        price: 160000,
        VRAMType: "GDDR6X",
        VRAMSize: 24
    }),
    new Motherboard({
        id: 11,
        name: "MAG B650 Tomahawk WIFI",
        vendor: "MSI",
        price: 15000,
        formFactor: "ATX",
        chipset: "B650"
    }),
    new RAM({
        id: 12,
        name: "FURY Renegade",
        vendor: "Kingston",
        price: 15000,
        size: 16,
        type: "DDR4"
    }),
    new CPU({
        id: 13,
        name: "Core i5-13600K",
        vendor: "Intel",
        price: 28000,
        socket: "LGA 1700",
        cores: 14,
        threads: 20,
        baseClock: 3.5
    }),
    new CPU({
        id: 14,
        name: "Ryzen 7 5700X",
        vendor: "AMD",
        price: 15000,
        socket: "AM4",
        cores: 8,
        threads: 16,
        baseClock: 3.4
    }),
    new CPU({
        id: 15,
        name: "Core i9-14900K",
        vendor: "Intel",
        price: 65000,
        socket: "LGA 1700",
        cores: 24,
        threads: 32,
        baseClock: 3.2
    }),
    new GPU({
        id: 16,
        name: "GeForce RTX 3060",
        vendor: "Nvidia",
        price: 35000,
        VRAMType: "GDDR6",
        VRAMSize: 12
    }),
    new GPU({
        id: 17,
        name: "Radeon RX 7600",
        vendor: "AMD",
        price: 30000,
        VRAMType: "GDDR6",
        VRAMSize: 8
    }),
    new GPU({
        id: 18,
        name: "GeForce RTX 4080 SUPER",
        vendor: "Nvidia",
        price: 120000,
        VRAMType: "GDDR6X",
        VRAMSize: 16
    }),
    new Motherboard({
        id: 19,
        name: "B760M AORUS ELITE AX",
        vendor: "Gigabyte",
        price: 14000,
        formFactor: "Micro ATX",
        chipset: "B760"
    }),
    new Motherboard({
        id: 20,
        name: "B650E PG RIPTIDE WIFI",
        vendor: "ASRock",
        price: 22000,
        formFactor: "ATX",
        chipset: "B650E"
    }),
    new Motherboard({
        id: 21,
        name: "MEG X670E ACE",
        vendor: "MSI",
        price: 45000,
        formFactor: "E-ATX",
        chipset: "X670E"
    }),
    new Motherboard({
        id: 22,
        name: "PRIME A620M-K",
        vendor: "ASUS",
        price: 6000,
        formFactor: "Micro ATX",
        chipset: "A620"
    }),
    new RAM({
        id: 23,
        name: "Viper Steel",
        vendor: "Patriot",
        price: 7000,
        size: 16,
        type: "DDR4"
    }),
    new RAM({
        id: 24,
        name: "XPG Caster",
        vendor: "Adata",
        price: 12000,
        size: 32,
        type: "DDR5"
    }),
    new RAM({
        id: 25,
        name: "Vengeance LPX",
        vendor: "Corsair",
        price: 4500,
        size: 8,
        type: "DDR4"
    }),
    new RAM({
        id: 26,
        name: "Ripjaws S5",
        vendor: "G.SKILL",
        price: 10000,
        size: 16,
        type: "DDR5"
    }),
    new GPU({
        id: 27,
        name: "RTX 4070 Ti SUPER",
        vendor: "Nvidia",
        price: 85000,
        VRAMType: "GDDR6X",
        VRAMSize: 16
    })
];