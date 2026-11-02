const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x30F858;
const TestName = 0x280F5A;
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");
