const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x2677B6;
const TestName = 0x204674;
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");
