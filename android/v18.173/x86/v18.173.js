// Not verified, maybe it doesn't work.
const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x3C97A8;
const TestName = 0x2C6367;
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");
