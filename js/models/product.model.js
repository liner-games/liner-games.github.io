class Product {
    static categoryNames = {
        cpu: "Процессор",
        gpu: "Видеокарта",
        ram: "Оперативная память",
        motherboard: "Материнская плата"
    };

    constructor({id, name, vendor, category, price}) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.vendor = vendor;
        this.price = price;
    }

    get formattedPrice() {
        return Intl.NumberFormat('ru-RU').format(this.price) + '₽';
    }

    get fullName() {
        return `${this.vendor} ${this.name}`;
    }

    get specs() {
        return {};
    }

    get categoryName() {
        return Product.categoryNames[this.category] || this.category;
    }
}

export class CPU extends Product {
    constructor({id, name, vendor, price, socket, cores, threads, baseClock}) {
        super({id, name, vendor, category: "cpu", price});

        this.socket = socket;
        this.cores = cores;
        this.threads = threads;
        this.baseClock = baseClock;
    }

    get specs() {
        return {
            socket: this.socket,
            cores: `${this.cores} ядер`,
            threads: `${this.threads} потоков`,
            baseClock: `${this.baseClock} МГц`
        };
    }
}

export class GPU extends Product {
    constructor({id, name, vendor, price, VRAMType, VRAMSize}) {
        super({id, name, vendor, category: "gpu", price});

        this.VRAMType = VRAMType;
        this.VRAMSize = VRAMSize;
    }

    get specs() {
        return {
            memory: `${this.VRAMSize} ГБ ${this.VRAMType}`,
        };
    }
}

export class RAM extends Product {
    constructor({id, name, vendor, price, size, type}) {
        super({id, name, vendor, category: "ram", price});

        this.size = size;
        this.type = type;
    }

    get specs() {
        return {
            memory: `${this.size} ГБ ${this.type}`
        };
    }
}

export class Motherboard extends Product {
    constructor({id, name, vendor, price, formFactor, chipset}) {
        super({id, name, vendor, category: "motherboard", price});

        this.formFactor = formFactor;
        this.chipset = chipset;
    }

    get specs() {
        return {
            formFactor: this.formFactor,
            chipset: this.chipset
        };
    }
}