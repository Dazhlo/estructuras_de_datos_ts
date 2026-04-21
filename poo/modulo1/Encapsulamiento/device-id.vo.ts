// domain/value-objects/device-id.vo.ts
export class DeviceId {
  constructor(private readonly value: string) {
    if (!/^[0-9a-fA-F]{8}$/.test(value)) {
      throw new Error('Invalid DeviceId: Must be 8-char hex (LoRaWAN style)');
    }
  }

  getValue(): string { return this.value; }
}

// domain/entities/device.entity.ts
export class Device {
  private constructor(
    private readonly id: DeviceId,
    private status: 'online' | 'offline',
    private lastSeen: Date
  ) {}

  // Factory method 
  static create(id: string): Device {
    return new Device(new DeviceId(id), 'offline', new Date());
  }

  // Comportamiento, no solo mutación
  public markAsActive(): void {
    this.status = 'online';
    this.lastSeen = new Date();
  }

  public toPrimitives() {
    return { id: this.id.getValue(), status: this.status };
  }
}