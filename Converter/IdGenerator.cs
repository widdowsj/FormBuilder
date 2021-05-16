namespace Converter
{
    public static class IdGenerator
    {
        private static int _currentId = 0;

        public static void Reset()
        {
            _currentId = 0;
        }

        public static string NextId(string prefix)
        {
            _currentId++;
            return $"{prefix}-{_currentId}";
        }
    }
}
