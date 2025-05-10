from crewai.tools import tool 

@tool('github_search')
def github_search():
    return 


@tool('github_clone')
def github_clone():
    return

@tool('github_add')
def github_add():
    return

@tool('github_commit')
def github_commit():
    return

@tool('github_push')
def github_push():
    return

# @tool('read_file')
# def read_file(file_path: str) -> str:
#     """
#     Reads the content of a file and returns it as a string.
    
#     Args:
#         file_path (str): The path to the file to be read.
        
#     Returns:
#         str: The content of the file.
#     """
#     with open(file_path, 'r') as file:
#         return file.read()